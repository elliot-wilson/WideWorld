class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.string :summary, null: false, limit: 280
      t.string :address, null: false
      t.float :lat
      t.float :lng
      t.text :description, null: false
      t.text :additional_info, limit: 500
      t.string :official_website
      t.integer :initial_author_id, null: false

      t.timestamps
    end
    add_index :locations, :initial_author_id
    add_index :locations, :title, unique: true
  end
end
