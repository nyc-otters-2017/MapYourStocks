class Stock < ApplicationRecord
  belongs_to :portfolio
  has_many :users, through: :portfolios


  


end
