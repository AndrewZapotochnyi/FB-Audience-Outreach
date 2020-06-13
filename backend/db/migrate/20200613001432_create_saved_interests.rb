class CreateSavedInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_interests do |t|
      t.saved_interest :text
      t.timestamps
    end
  end
end
