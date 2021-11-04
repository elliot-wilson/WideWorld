class CreateLocationVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :location_visits do |t|
      t.integer :location_id, null: false
      t.integer :visitor_id, null: false

      t.timestamps
    end
    add_index :location_visits, :location_id
    add_index :location_visits, :visitor_id
  end
end
