class CreateUserLocationLists < ActiveRecord::Migration[5.2]
  def change
    create_table :user_location_lists do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :user_location_lists, :author_id
    add_index :user_location_lists, [:author_id, :title], unique: true
  end
end
