class CreateLocationListings < ActiveRecord::Migration[5.2]
  def change
    create_table :location_listings do |t|
      t.integer :location_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
    add_index :location_listings, :location_id
    add_index :location_listings, :list_id
    add_index :location_listings, [:location_id, :list_id], unique: true
  end
end
