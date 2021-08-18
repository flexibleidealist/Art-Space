class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
