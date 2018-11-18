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

    # CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(16) NOT NULL, password VARCHAR(16) NOT NULL, name VARCHAR(20), profession VARCHAR(20), imageurl VARCHAR(200));

    # CREATE TABLE events (id SERIAL PRIMARY KEY, name VARCHAR(50), eventtype VARCHAR(10), date INTEGER, month VARCHAR(3), location VARCHAR(50), hostedby VARCHAR(20), starttime VARCHAR(5), endtime VARCHAR(5));

    # DROP TABLE users;

    # INSERT INTO users (username, password, name, profession, imageurl) VALUES ('ashwanth1109', '123', 'Ashwanth A R', 'Javascript Developer', 'https://avatars1.githubusercontent.com/u/32328857?s=460&v=4');

    # INSERT INTO events (name, eventtype, date, month, location, hostedby, starttime, endtime) VALUES ('React Meetup', 'React', 20, 'Nov', 'Bangalore, India', 'Ashwanth', '07:00', '08:00');

    # SELECT * FROM users;

    # SELECT hosting.userid FROM events INNER JOIN hosting ON hosting.eventid = events.id WHERE hosting.eventid = 1;

    def self.all
        results = DB.exec("SELECT * FROM users;")
        results.map do |result|
            {
                "id" => result["id"].to_i,
                "username" => result["username"],
                "password" => result["password"],
                "name" => result["name"],
                "profession" => result["profession"],
                "imageurl" => result["imageurl"],
                "savedevents" => result["savedevents"],
                "hostingevents" => result["hostingevents"]
            }
        end
    end

    def self.find(id)
        result = DB.exec("SELECT * FROM users WHERE id=#{id};")
        {
            "id" => result.first["id"].to_i,
            "username" => result.first["username"],
            "password" => result.first["password"],
            "name" => result.first["name"],
            "profession" => result.first["profession"],
            "imageurl" => result.first["imageurl"],
            "savedevents" => result.first["savedevents"],
            "hostingevents" => result.first["hostingevents"]
        }
    end

    def self.create(opts)
        result = DB.exec(
            <<-SQL
                INSERT INTO users (username, password) VALUES ('#{opts["username"]}', '#{opts["password"]}')
                RETURNING id, username, password
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "username" => result.first["username"],
            "password" => result.first["password"],
            "name" => result.first["name"],
            "profession" => result.first["profession"],
            "imageurl" => result.first["imageurl"],
            "savedevents" => result.first["savedevents"],
            "hostingevents" => result.first["hostingevents"]
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
                SET username='#{opts["username"]}', password='#{opts["password"]}', name='#{opts["name"]}', profession='#{opts["profession"]}', imageurl='#{opts["imageurl"]}', savedevents=#{opts["savedevents"]}, hostingevents=#{opts["hostingevents"]}
                WHERE id=#{id}
                RETURNING id, username, password, name, profession, imageurl, savedevents, hostingevents
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "username" => result.first["username"],
            "password" => result.first["password"],
            "name" => result.first["name"],
            "profession" => result.first["profession"],
            "imageurl" => result.first["imageurl"],
            "savedevents" => result.first["savedevents"],
            "hostingevents" => result.first["hostingevents"]
        }
    end
end