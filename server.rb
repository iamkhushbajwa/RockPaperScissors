require 'sinatra'

get '/' do
  send_file 'javascript/index.html'
end