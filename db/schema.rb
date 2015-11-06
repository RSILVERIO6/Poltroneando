# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151101155152) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "filmes", force: :cascade do |t|
    t.string   "titulo"
    t.integer  "ano"
    t.text     "sinopse"
    t.integer  "duracao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "generos", force: :cascade do |t|
    t.string   "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "generos_filmes", force: :cascade do |t|
    t.integer  "genero"
    t.integer  "filme"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pais", force: :cascade do |t|
    t.string   "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pessoas", force: :cascade do |t|
    t.string   "nome"
    t.date     "data_nasc"
    t.string   "sexo"
    t.integer  "pais"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.integer  "pessoa"
    t.string   "login"
    t.string   "senha"
    t.string   "email"
    t.string   "email_recuperacao"
    t.integer  "genero"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
