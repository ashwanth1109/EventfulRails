class Event
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

    # INSERT INTO events (name, type, date, month, location, hostedby, starttime, endtime) VALUES ('React Meetup', 'React', 20, 'Nov', 'Bangalore, India', 'Ashwanth', '07:00', '08:00');

    # SELECT * FROM users;

    # SELECT hosting.userid FROM events INNER JOIN hosting ON hosting.eventid = events.id WHERE hosting.eventid = 1;

    def self.all
        results = DB.exec("SELECT * FROM events;")
        results.map do |result|
            {
                "id" => result["id"].to_i,
                "name" => result["name"],
                "type" => result["type"],
                "date" => result["date"].to_i,
                "month" => result["month"],
                "location" => result["location"],
                "hostedby" => result["hostedby"],
                "starttime" => result["starttime"],
                "endtime" => result["endtime"]
            }
        end
    end

    def self.find(id)
        result = DB.exec("SELECT * FROM events WHERE id=#{id};")
        {
            "id" => result.first["id"].to_i,
            "name" => result.first["name"],
            "type" => result.first["type"],
            "date" => result.first["date"].to_i,
            "month" => result.first["month"],
            "location" => result.first["location"],
            "hostedby" => result.first["hostedby"],
            "starttime" => result.first["starttime"],
            "endtime" => result.first["endtime"]
        }
    end

    def self.create(opts)
        result = DB.exec(
            <<-SQL
                INSERT INTO events (name, type, date, month, location, hostedby, starttime, endtime) 
                VALUES ('#{opts["name"]}', '#{opts["type"]}', #{opts["date"]}, '#{opts["month"]}', '#{opts["location"]}', '#{opts["hostedby"]}', '#{opts["starttime"]}', '#{opts["endtime"]}' )
                RETURNING id, name, type, date, month, location, hostedby, starttime, endtime
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "name" => result.first["name"],
            "type" => result.first["type"],
            "date" => result.first["date"].to_i,
            "month" => result.first["month"],
            "location" => result.first["location"],
            "hostedby" => result.first["hostedby"],
            "starttime" => result.first["starttime"],
            "endtime" => result.first["endtime"]
        }
    end

    def self.delete(id)
        result = DB.exec("DELETE FROM events WHERE id=#{id};")
        {
            "deleted" => true
        }
    end

    def self.update(id, opts)
        result = DB.exec(
            <<-SQL
                UPDATE events
                SET name='#{opts["name"]}', type='#{opts["type"]}', date=#{opts["date"]}, month='#{opts["month"]}', location='#{opts["location"]}', hostedby='#{opts["hostedby"]}', starttime='#{opts["starttime"]}', endtime='#{opts["endtime"]}'
                WHERE id=#{id}
                RETURNING id, name, type, date, month, location, hostedby, starttime, endtime
            SQL
        )
        {
            "id" => result.first["id"].to_i,
            "username" => result.first["username"],
            "password" => result.first["password"],
            "name" => result.first["name"],
            "profession" => result.first["profession"],
            "imageurl" => result.first["imageurl"]
        }
    end
end