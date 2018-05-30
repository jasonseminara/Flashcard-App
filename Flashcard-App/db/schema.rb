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

ActiveRecord::Schema.define(version: 2018_05_30_204905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "q_value"
    t.string "a_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "deck_id"
    t.index ["deck_id"], name: "index_cards_on_deck_id"
  end

  create_table "decks", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "favorites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "deck_id"
    t.index ["deck_id"], name: "index_favorites_on_deck_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "usercards", force: :cascade do |t|
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "card_id"
    t.index ["card_id"], name: "index_usercards_on_card_id"
    t.index ["user_id"], name: "index_usercards_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "password_digest"
  end

  add_foreign_key "cards", "decks"
  add_foreign_key "favorites", "decks"
  add_foreign_key "favorites", "users"
  add_foreign_key "usercards", "cards"
  add_foreign_key "usercards", "users"
end
