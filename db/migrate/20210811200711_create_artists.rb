class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.text :artist_statement
      t.string :image_url

      t.timestamps
    end
  end
end
