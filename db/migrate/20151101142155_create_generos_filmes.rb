class CreateGenerosFilmes < ActiveRecord::Migration
  def change
    create_table :generos_filmes do |t|
      t.integer :genero
      t.integer :filme

      t.timestamps null: false
    end
  end
end
