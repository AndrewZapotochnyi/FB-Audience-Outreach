class CreateInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :interests do |t|
      t.integer :facebook_id
      t.string :name

      t.timestamps
    end
  end
end
