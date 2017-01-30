# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


sample_tickers = %w[nak wins cwei cc gv kem twnkw ren]
kane = User.create!(email:'kane123@map.com', password:'password')
test_port = kane.portfolios.create!(name:'lazy testing')

10.times do
  test_port.stocks.create!(ticker: sample_tickers.sample)
end
