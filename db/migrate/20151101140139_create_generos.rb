class CreateGeneros < ActiveRecord::Migration
  def change
    create_table :generos do |t|
      t.string :nome

      t.timestamps null: false
    end
  end
end
