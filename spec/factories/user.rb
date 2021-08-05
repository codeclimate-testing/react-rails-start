FactoryBot.define do
  password = Faker::Internet.password
  factory :user, aliases: [:author] do
    name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    password { password }
    password_confirmation { password }
    email { Faker::Internet.email }
  end
end