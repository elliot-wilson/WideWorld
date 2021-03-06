# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_05_235411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "location_edits", force: :cascade do |t|
    t.integer "editor_id", null: false
    t.integer "location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["editor_id"], name: "index_location_edits_on_editor_id"
    t.index ["location_id"], name: "index_location_edits_on_location_id"
  end

  create_table "location_listings", force: :cascade do |t|
    t.integer "location_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_location_listings_on_list_id"
    t.index ["location_id", "list_id"], name: "index_location_listings_on_location_id_and_list_id", unique: true
    t.index ["location_id"], name: "index_location_listings_on_location_id"
  end

  create_table "location_visits", force: :cascade do |t|
    t.integer "location_id", null: false
    t.integer "visitor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_location_visits_on_location_id"
    t.index ["visitor_id"], name: "index_location_visits_on_visitor_id"
  end

  create_table "location_wanna_visits", force: :cascade do |t|
    t.integer "location_id", null: false
    t.integer "wanna_visitor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_location_wanna_visits_on_location_id"
    t.index ["wanna_visitor_id"], name: "index_location_wanna_visits_on_wanna_visitor_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "title", null: false
    t.string "summary", limit: 280, null: false
    t.string "address", null: false
    t.float "lat"
    t.float "lng"
    t.text "description", null: false
    t.text "additional_info"
    t.string "official_website"
    t.integer "initial_author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["initial_author_id"], name: "index_locations_on_initial_author_id"
    t.index ["title"], name: "index_locations_on_title", unique: true
  end

  create_table "user_location_lists", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "title"], name: "index_user_location_lists_on_author_id_and_title", unique: true
    t.index ["author_id"], name: "index_user_location_lists_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
