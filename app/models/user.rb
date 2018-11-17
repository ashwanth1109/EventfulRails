class User
    if (ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1],uri.user,uri.password)
    else
        DB = PG.connect({
        :host => 'localhost',
        :port => 5432,
        :dbname => 'EventfulRails_development'
    })
    end

    def self.all
        results = DB.exec("SELECT * FROM users;")
        results.map do |result|
            {
                "id" => result["id"].to_i,
                "name" => result["name"]
            }
        end
    end

    def self.find(id)
        result = DB.exec("SELECT * FROM users WHERE id=#{id};")
        {
            "id" => result.first["id"].to_i,
            "name" => result.first["name"]
        }
    end

    def self.create(opts)
        result = DB.exec(
            <<-SQL
                INSERT INTO users (name) VALUES ('#{opts["name"]}')
                RETURNING id, name
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "name" => result.first["name"]
        }
    end

    def self.delete(id)
        result = DB.exec("DELETE FROM users WHERE id=#{id};")
        {
            "deleted" => true
        }
    end

    def self.update(id, opts)
        result = DB.exec(
            <<-SQL
                UPDATE users
                SET name='#{opts["name"]}'
                WHERE id=#{id}
                RETURNING id, name
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "name" => result.first["name"]
        }
    end
end