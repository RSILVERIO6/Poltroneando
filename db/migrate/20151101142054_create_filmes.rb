class CreateFilmes < ActiveRecord::Migration
  def change
    create_table :filmes do |t|
      t.string :titulo
      t.integer :ano
      t.text :sinopse
      t.integer :duracao

      t.timestamps null: false
    end
  end
end
