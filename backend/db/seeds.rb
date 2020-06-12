# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup, or migrated with rake db:migrate).

require 'json'
puts "Seeding Data ..."

def import_json(file_name)
  JSON.parse(File.read(Rails.root.join('db', file_name)))
end

def import_CountryJson(file_name)
  JSON.parse(File.read(Rails.root.join('db', file_name)))
end

countriesData = import_json("dataCountries.json")
interestsData = import_json("allInterests.json")

Interest.destroy_all
interestsData.each { |n| 
  if n["id"] 
  Interest.create(facebook_id: n["id"], name: n["name"], type_category: n["type_category"], description: n["description"])
  end
}

Country.destroy_all
countriesData.each { |n| 
  Country.create(name: n["name"], country_code: n["country_code"])
}

User.destroy_all
user1 = User.new
user1.first_name = 'Geralt'
user1.last_name = 'OfRivia'
user1.email = 'user1@example.com'
user1.password = 'password'
user1.password_confirmation = 'password'
user1.save

########### INTEREST SEEDS ##########################################



########### INTEREST SEEDS ##########################################

puts "Seeds imported!"
