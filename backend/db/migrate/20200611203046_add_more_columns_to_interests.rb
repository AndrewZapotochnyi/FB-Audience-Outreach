class AddMoreColumnsToInterests < ActiveRecord::Migration[6.0]
  def change
    add_column :interests, :type_category, :string
    add_column :interests, :description, :string
  end
end
