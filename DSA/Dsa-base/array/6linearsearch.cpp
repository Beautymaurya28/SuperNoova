#include<iostream>
using namespace std;
int main(){
    int arr[5]={1,3,2,5,3};
    int target;
    cout<<"enter the target element: ";
    cin>>target;
    cout<<endl;
     for(int i=0;i<5;i++){
        if(arr[i]==target){
            cout<<"element is found on index "<<i<<endl;
            break;
        }
     }
    return 0;
}