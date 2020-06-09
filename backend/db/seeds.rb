# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup, or migrated with rake db:migrate).

require 'json'
puts "Seeding Interests Data ..."

def import_json(file_name)
  JSON.parse(File.read(Rails.root.join('db', file_name)))
end

def import_CountryJson(file_name)
  JSON.parse(File.read(Rails.root.join('db', file_name)))
end

countriesData = import_json("dataCountries.json")
interestsData = import_json("dataInterests.json")

Interest.destroy_all
interestsData.each { |n| 
  Interest.create(facebook_id: n["id"], name: n["name"])
}

Country.destroy_all
countriesData.each { |n| 
  Country.create(name: n["name"], country_code: n["country_code"])
}

puts "Seeds imported!"
