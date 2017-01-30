class Stock < ApplicationRecord
  has_many :users, through: :portfolios
end
