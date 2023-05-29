function threeSum(arr, target) {
// write your code here
  arr.sort((a,b)=>a-b);
  //Using two pointers Technique
if(arr.length<2)
{
	return 0;
}
  let 3sum = Number.MAX_VALUE;
	for(let i=0;i<arr.length-2;i++)
		{
			let j=i+1;
			let k=arr.length-1;

			while(j<k)
				{
					let sum=arr[i]+arr[j]+arr[k];
					if(Math.abs(target-3sum)>Math.abs(target-sum))
					{
						3sum=sum;
					}

					if(sum>target)
					{
						k--;
					}
					else
					{
						j++;
					}
				}
		}
	return 3sum;
}

module.exports = threeSum;
