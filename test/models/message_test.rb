require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  test "instantiating message" do
    Message.new("foo nick", "bar msg")
  end
end
