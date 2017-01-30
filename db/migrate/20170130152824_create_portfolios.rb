class CreatePortfolios < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios do |t|
      t.reference :user,          null: false
      t.reference :stock,         null: false

      t.timestamps
    end
  end
end
