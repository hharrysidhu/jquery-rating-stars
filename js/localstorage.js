/**
 * @author hsidhu
 */

var obj = [
			{
			    'name': 'Dhayalan',
			    'score': 100
			},
			{
				'name':'keil',
				'score': 200
			},
			{
				'name':'duet',
				'score': 300
			}
		];


function store_local_data($key, $data)
	{
		localStorage.setItem($key, JSON.stringify($data));
		return $key;
	}

function get_local_data($key)
	{
		var data = localStorage.getItem($key);
		return (JSON.parse(data));
	}

function remove_local_data($key)
{
	localStorage.removeItem($key);
	location.reload();
}


function serialize_form_data()
{
	var form_data = getQueryParameters();
	var Stored_key = store_local_data('form_data', form_data);
	self.location="index.html";
}

var local_data = get_local_data('form_data');
if (local_data)
{
	$.each(local_data, function(K,V){
		$('.storage-items').append("<li>" + K+":  "+V+"</li>");
	});
};


// get url params as object
function getQueryParameters(str){
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
}



