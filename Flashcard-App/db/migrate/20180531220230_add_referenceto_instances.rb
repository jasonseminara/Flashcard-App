class AddReferencetoInstances < ActiveRecord::Migration[5.2]
  def change
    add_reference :instances, :user, index: true
  end
end
