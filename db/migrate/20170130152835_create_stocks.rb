class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.string :ticker, null: false
      t.string :buy, null: false #buy is buy-in price
      t.string :shares, null: false
      t.references :portfolio, null: false

      t.timestamps
    end
  end
end
