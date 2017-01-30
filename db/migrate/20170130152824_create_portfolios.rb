class CreatePortfolios < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios do |t|
      t.string :name,              null: false, default: 'default'
      t.references :user,          null: false

      t.timestamps
    end
  end
end
