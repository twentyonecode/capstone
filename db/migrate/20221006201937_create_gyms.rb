class CreateGyms < ActiveRecord::Migration[7.0]
  def change
    create_table :gyms do |t|
      t.string :gym_name
      t.string :store_code
      t.string :hours_of_operations
      t.string :phone_number
      t.string :features
      t.string :street
      t.string :city
      t.string :state
      t.string :email
      t.string :deal
      t.string :deal_code
      t.text :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
