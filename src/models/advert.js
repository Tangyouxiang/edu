import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/edu')

const advertSchema = new mongoose.Schema({
	title: {type: String, required: true},
	image: {type: String, required: true},
	link:　{type: String, required: true},
	start_time: {type: Date, required: true},
	end_time: {type: Date, required: true},
	create_time: {type: Date, default: Date.now},
	last_modified: {type: Date, default: Date.now}
})

const Advert = mongoose.model('Advert', advertSchema)
// 导出模型
export default Advert