class Channel
  @@channels = []

  attr_accessor :name, :members, :messages

  def initialize(name)
    if Channel.find(name).present?
      raise "Duplicate channel name"
    end

    @name = name
    @members = []
    @messages = []

    @@channels << self
  end

  def self.find(name)
    @@channels.detect { |channel| channel.name == name }
  end

  def join(nick)
    @members << { nick: nick }
  end

  def add_message(nick, msg)
    @messages << Message.new(nick, msg)
  end

  Channel.new("main")
end
