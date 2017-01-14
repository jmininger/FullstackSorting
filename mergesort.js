function mergeSort(arr){
	var splitArrs = split(arr);
	let arr1 = splitArrs[0];
	let arr2 = splitArrs[1];
	console.log(arr1, arr2);
	if(splitArrs[0].length === 1){
		return merge(splitArrs[0], splitArrs[1]);
	}
	else{
		return merge(mergeSort(splitArrs[0]),mergeSort(splitArrs[1]));
	}
}

// mergeSort([2,5,8,1]);

function split(arr){
	var leftSplitSz = arr.length/2;
	 // (arr.length%2===1) ? arr.length/2-.5 :
	var leftSplit = arr.slice(0,leftSplitSz);
	var rightSplit = arr.slice(leftSplitSz);
	return [leftSplit, rightSplit];
}


function merge(arr1, arr2){
	var finalArr = [];
	// var bigger = (arr1.length>arr2.length)?arr1.length:arr2.length;
	while(arr1.length>0 || arr2.length>0){
		if(arr1.length<=0 && arr2.length>0){
			finalArr = finalArr.concat(arr2);
			break;
		}
		if(arr2.length<=0 && arr1.length>0){
			finalArr = finalArr.concat(arr1);
			break;
		}
		if(arr1[0]>arr2[0]){
			finalArr.push(arr2.shift());
		}
		else{
			finalArr.push(arr1.shift());
		}
	}
	return finalArr;
}