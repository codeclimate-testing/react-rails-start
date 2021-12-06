FactoryBot.define do
  factory :post do
    author
    title { "postittle" }
    body { Faker::Quote.jack_handey[0..139] }
  end
end
