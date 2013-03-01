class Message
  attr_accessor :nick, :text, :timestamp

  def initialize(nick, text)
    @nick = nick
    @text = text
    @timestamp = DateTime.now
  end
end
