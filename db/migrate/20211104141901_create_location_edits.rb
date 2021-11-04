class CreateLocationEdits < ActiveRecord::Migration[5.2]
  def change
    create_table :location_edits do |t|
      t.integer :editor_id, null: false
      t.integer :location_id, null: false

      t.timestamps
    end
    add_index :location_edits, :editor_id
    add_index :location_edits, :location_id
  end
end
