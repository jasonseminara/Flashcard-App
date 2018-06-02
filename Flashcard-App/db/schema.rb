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

ActiveRecord::Schema.define(version: 2018_06_01_145809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.bigint "instance_id"
    t.bigint "question_id"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["instance_id", "question_id"], name: "index_answers_on_instance_id_and_question_id", unique: true
    t.index ["instance_id"], name: "index_answers_on_instance_id"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "instances", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "quiz_id"
    t.index ["quiz_id", "user_id"], name: "index_instances_on_quiz_id_and_user_id", unique: true
    t.index ["quiz_id"], name: "index_instances_on_quiz_id"
    t.index ["user_id"], name: "index_instances_on_user_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "q_value"
    t.string "a_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "quiz_id"
    t.index ["quiz_id"], name: "index_questions_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

end
