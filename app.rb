require 'sinatra'
require_relative 'routes/init'
require_relative 'helpers/init'
require_relative 'models/init'

class MyApp < Sinatra::Base

	configure do
		set :static, true
		set :public, File.dirname(__FILE__) + '/public'
		set :app_file, __FILE__		
	end

	configure :development do
		enable :logging, :dump_errors, :raise_errors
	end

end

