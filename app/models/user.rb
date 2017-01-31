class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :portfolios
  has_many :stocks, through: :portfolios



  def has_ticker?(ticker)
    self.stocks.where(ticker: ticker).size > 0
  end

end
