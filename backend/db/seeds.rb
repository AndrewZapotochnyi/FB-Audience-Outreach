# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

require 'json'
puts "Seeding Data ..."

def import_json(file_name)
  JSON.parse(File.read(Rails.root.join('db', file_name)))
end

interestsData = import_json("dataInterests.json")

Interest.destroy_all
interestsData.each { |n| 
  Interest.create(facebook_id: n["id"], name: n["name"])
}

puts "Seed imported!"
