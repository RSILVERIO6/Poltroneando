class CreatePessoas < ActiveRecord::Migration
  def change
    create_table :pessoas do |t|
      t.string :nome
      t.date :data_nasc
      t.string :sexo
      t.integer :pais

      t.timestamps null: false
    end
  end
end
