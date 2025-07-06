// #include<iostream>
// using namespace std;
// void reverse(int arr[],int size){
//     int start=0;int end=size-1;
//     while(start<end){
//         swap(arr[start],arr[end]);
//         start++;
//         end--;
//     }
// }
// int main(){
     
//      int size;
//      cin>>size;
//      int arr;
//      for(int i=0;i<size-1;i++){
//         cin<<arr[i];
//      }
//      cout<<"original array "<<endl;
//     for(int i=0;i<size;i++){
//         cout<<arr[i]<<" ";
//     }
//     cout<<"reversed array ";
//     int result=reverse(arr,size);
//     cout<<result;
//     return 0;

// }

#include<iostream>
using namespace std;
int main(){
    int arr[5]={2,1,4,6,8};
    int start=0;
    int end=5-1;
    while(start<end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }

    cout<<"reversed array: "<<endl;
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}