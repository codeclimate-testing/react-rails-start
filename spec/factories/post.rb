FactoryBot.define do
  factory :post do
    author
    title { Faker::Quote.singular_siegler }
    body { Faker::Quote.jack_handey[0..139] }
  end
end