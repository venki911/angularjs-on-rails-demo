require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  test "main channel is instantiated and can be found after class is loaded" do
    assert Channel.find("main").is_a?(Channel)
  end

  test "unable to redefine main channel" do
    assert_raise RuntimeError do
      Channel.new("main")
    end
  end

  test "adding a new message to a channel" do
    channel = Channel.new("foo")

    assert_difference 'channel.messages.count', +1 do
      channel.add_message("bar", "baz")
    end
  end
end
