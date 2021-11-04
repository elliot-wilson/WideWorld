class CreateLocationWannaVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :location_wanna_visits do |t|
      t.integer :location_id, null: false
      t.integer :wanna_visitor_id, null: false

      t.timestamps
    end
    add_index :location_wanna_visits, :location_id
    add_index :location_wanna_visits, :wanna_visitor_id
  end
end
