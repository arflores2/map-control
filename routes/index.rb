class MyApp < Sinatra::Base

	get '/' do
		erb :index
	end

  get '/toggle' do
    html :toggle
  end

  get '/drag' do
    html :drag
  end

  def html(view)
    File.read(File.join('views', "#{view.to_s}.html"))
  end
end