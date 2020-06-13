class SavedInterest < ActiveRecord::Migration[6.0]
  def change
    add_column :saved_interests, :saved_interest, :string
  end
end
