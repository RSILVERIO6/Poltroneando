class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.integer :pessoa
      t.string :login
      t.string :senha
      t.string :email
      t.string :email_recuperacao
      t.integer :genero

      t.timestamps null: false
    end
  end
end
