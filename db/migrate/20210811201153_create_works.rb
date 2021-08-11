class CreateWorks < ActiveRecord::Migration[6.1]
  def change
    create_table :works do |t|
      t.string :title
      t.integer :year
      t.string :materials
      t.string :image_url
      t.references :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end
