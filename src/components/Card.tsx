export default function Card() {
	return (
		<div
			className='
         group
         w-52 h-52 p-4 
         border-2 border-gray-500 hover:border-gray-600 rounded-lg 
         bg-white 
         shadow-sm hover:shadow-lg transition-shadow
         cursor-pointer
         '
		>
			<h3 className='mb-2 text-lg font-semibold text-gray-700 group-hover:text-gray-800'>
				Note
			</h3>
			<p className='text-sm text-gray-600 group-hover:text-gray-800'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mollis enim. Integer
				auctor at nisl vitae fringilla.
			</p>
		</div>
	);
}
